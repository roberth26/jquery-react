app.define([], () => (
	class Store {
        constructor() {
            this.subscribers = [];
            this.state = {
                text: 'Hello World!'
            };

            this.onChange = this.onChange.bind( this );
            this.update = this.update.bind( this );
            this.getState = this.getState.bind( this );
            this.setText = this.setText.bind( this );
        }

        onChange( subscriber ) {
            this.subscribers.push( subscriber );
        };

        update() {
            const state = this.getState();
            this.subscribers.forEach( subscriber => {
                subscriber( state );
            });
        }

        getState() {
            return $.extend( {}, this.state, true );
        }

        setText( text ) {
            this.state.text = text;
            this.update();
        }
    }
));