app.run([ 'framework/render.js', 'app/appStore.js', 'app/components/App.js',  ], ( render, appStore, App  ) => {
	return () => {
		$( '#root' ).html(
			render( App, { appStore })
		);
	};
});