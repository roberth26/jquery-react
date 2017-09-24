app.define([ 'framework/Component.js', 'framework/render.js', 'app/components/Message.js' ], ( Component, render, Message ) => {
	return class App extends Component {
		constructor( props ) {
			super( props );

			this.handleClick = this.handleClick.bind( this );
		}

		handleClick( event ) {
			this.props.appStore.setText( new Date().toString() );
		}

		render() {
			return (
				render( 'div', {
					html: [
						render( Message ),
						render( 'button', {
							text: 'change text',
							click: this.handleClick
						})
					]
				})
			);
		}
	};
});