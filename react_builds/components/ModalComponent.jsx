class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }

    const overlay = (this.props.style) && (this.props.style.overlay) ? this.props.style.overlay : ModalComponent.defaultStyles.overlay;
    const overlayClass = (this.props.overlayClass) ? {} : overlay;
    const modal = (this.props.style) && (this.props.style.modal) ? this.props.style.modal : ModalComponent.defaultStyles.modal;
    const modalClass = (this.props.modalClass) ? {} : modal;

    return (
      <div>
        <div style={overlayClass} onClick={this.props.onCloseRequest} className={this.props.overlayClass}>
          <div style={modalClass} className={this.props.modalClass} >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  onCloseRequest: React.PropTypes.func,
  style: React.PropTypes.objectOf(React.PropTypes.object),
  overlayClassName: React.PropTypes.string,
  modalClassName: React.PropTypes.string,
};

ModalComponent.defaultStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    height: '100%',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  modal: {
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10 #000',
    display: 'table',
    left: '5%',
    maxHeight: '80%',
    maxWidth: '80%',
    overflowY: 'scroll',
    padding: '20px 50px',
    position: 'fixed',
    top: '10%',
    width: '80%',
    zIndex: 2,
  },
};

export default window.ModalComponent = ModalComponent;
