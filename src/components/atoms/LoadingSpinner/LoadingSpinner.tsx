import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.i`
  animation: ${rotate} 2s linear infinite;
  display: block;
  width: fit-content;
  height: auto;
`;

const LoadingSpinner = ({ size = '32px' }: { size?: string }) => {
  return (
    <div>
      <Spinner>
        <FaSpinner size={size} />
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
