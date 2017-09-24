app.define([ 'framework/Component.js', 'framework/render.js' ], ( Component, render ) => (
	stores => component => {
        return class ObserverWrapper extends Component {
            constructor( props ) {
                super( props );

                for ( let store in stores ) {
                    stores[ store ].onChange( state => {
                        this.component.render();
                    })
                }

                this.component = new component( $.extend( this.props, stores ) );
            }

            render() {
                return this.component.render();
            }
        };
    }
));