app.define([], () => (
	class Component {
        constructor( props ) {
            this.state = {};
            this.props = props || {};
            this.$element = null;

            this.setState = this.setState.bind( this );
            const _render = this.render.bind( this );
            this.render = () => {
                const $element = _render();
                if ( this.$element ) {
                    this.$element.replaceWith( $element );
                }
                this.$element = $element;

                return $element;
            }
        }

        setState( stateMutator ) {
            $.extend( this.state, stateMutator( this.props ) );
            this.render();
        }

        render() {
            return null;
        }
    }
));