import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'

const CreatePlan = ({ onClose }) => {
  return (
    <>
      <Backdrop />
      <Box>
        <h2>Create new plan</h2>

        <button onClick={onClose}>Close</button>
      </Box>
    </>
  )
}

export default CreatePlan
