app.define([ 'framework/Component.js' ], ( Component ) => (
    ( component, props ) => {
        if ( typeof component === 'string' ) {
            return $(`<${component} />`, props );
        } else if ( component.__proto__ === Component ) {
            return new component( props ).render();
        } else if ( component instanceof Component ) {
            component.props = props;

            return component.render();
        }

        return component( props );
    }
));