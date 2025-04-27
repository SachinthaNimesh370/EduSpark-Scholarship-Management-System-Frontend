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
    maxWidth: 450,
    width: '100%',
    padding: '32px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  inputWrapper: {
    marginBottom: '24px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  signInButton: {
    fontSize: '14px !important',
    alignSelf: 'flex-start',
    textTransform: 'none',
    color: '#1976d2 !important',
  },
  signUpButton: {
    fontSize: '15px !important',
    borderRadius: 8,
    padding: '10px 24px',
    width: '30%',
    height: '40px',
    backgroundColor: '#1976d2 !important',
    color: '#fff !important',
    alignSelf: 'flex-end',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#115293 !important',
    },
  },
  selectControl: {
    marginTop: '16px !important',
    marginBottom: '6px !important',
  },
});

export default useStyles;
