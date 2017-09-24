app.define([ 'framework/Component.js', 'framework/render.js', 'framework/observer.js', 'app/appStore.js' ],
	( Component, render, observer, appStore ) => {
		class Message extends Component {
			render() {
				const { text } = this.props.appStore.getState();

				return (
					render( 'div', { text })
				);
			}
		}

		return observer({ appStore })( Message );
	}
);