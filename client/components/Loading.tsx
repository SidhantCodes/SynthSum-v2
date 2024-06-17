import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='bg-[#171717] flex items-center justify-center rounded-2xl my-10 py-20 w-[92vw]'>
        <CircularProgress color="inherit" /> 
    </div>
  )
}

export default Loading