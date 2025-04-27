import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  card: {
    borderRadius: 12,
    minWidth: 320,
    maxWidth: 400,
    width: '100%',
    padding: '32px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  },
  inputWrapper: {
    marginBottom: '24px',
    
    
  },
  text:{
    variant:"h5" ,
    align:"center" ,
  },
  buttonWrapper: {
    display: 'flex',
    marginLeft:20,
    marginRight:20
    
  },
  button: {
    
    borderRadius: 8,
    padding: '10px 24px',
    width:'30%',
    fontSize: '15px !important',
    height:'40px',
    
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#115293',
    },
  },
});

export default useStyles;
