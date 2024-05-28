<Fab
  active={this.state.active}
  direction="up"
  containerStyle={{justifyContent: 'space-evenly'}}
  style={{backgroundColor: '#5067FF'}}
  position="bottomRight"
  onPress={() => this.setState({active: !this.state.active})}>
  <NbIcon name="share" />
  <Button
    style={{
      backgroundColor: Colors.primary,
      width: 60,
      height: 60,
      borderColor: Colors.white,
      borderWidth: 2,
      borderRadius: 100,
      marginVertical: 30,
    }}>
    <NbIcon name="logo-whatsapp" />
  </Button>
  <Button
    style={{
      backgroundColor: Colors.primary,
      width: 60,
      height: 60,
      borderColor: Colors.white,
      borderWidth: 2,
      borderRadius: 100,
      marginVertical: 30,
    }}>
    <NbIcon name="logo-facebook" />
  </Button>
  <Button
    disabled
    style={{
      backgroundColor: Colors.primary,
      width: 60,
      height: 60,
      borderColor: Colors.white,
      borderWidth: 2,
      borderRadius: 100,
      marginVertical: 30,
    }}>
    <NbIcon name="mail" />
  </Button>
  <Button
    disabled
    style={{
      backgroundColor: Colors.primary,
      width: 60,
      height: 60,
      borderColor: Colors.white,
      borderWidth: 2,
      borderRadius: 100,
      marginVertical: 30,
    }}>
    <NbIcon name="mail" />
  </Button>
</Fab>;
