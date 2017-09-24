const app = {}; // namespace

app.modules = new Map();

app.define = ( deps, module ) => {
    const moduleName = document.currentScript.getAttribute( 'src' );

    // enqueue new dependencies
    deps.forEach( dep => {
        if ( !app.modules.has( dep ) ) {
            app.modules.set( dep, $.Deferred() );
            const script = document.createElement( 'script' );
            script.setAttribute( 'src', dep );
            document.head.appendChild( script );
        }
    });

    const modulePromise = app.modules.get( moduleName ) || $.Deferred();
    if ( !app.modules.has( moduleName ) ) {
        app.modules.set( moduleName, modulePromise );
    }

    const depsPromises = deps.map( dep => app.modules.get( dep ) );

    // resolve this module when its dependencies are resolved
    return $.when( ...depsPromises )
        .then(( ...deps ) => modulePromise.resolve( module( ...deps ) ) );
};
    
app.run = ( ...moduleArgs ) => {
    app.define( ...moduleArgs )
        .then( runnable => runnable() );
};