const styles = {
  navlinks: {
    margin: 'auto 10px',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    margin: 'auto 10px',
    padding: '15px 0',
    textDecoration: 'none',
    color: 'white',
    ':hover': { borderBottom: '4px solid #fff' }
  },
  linkActive: {
    margin: 'auto 10px',
    color: '#1b98e0',
    padding: '0',
    ':hover': { borderBottom: '4px solid #fff' }
  }
};
export default styles;
