import { Icon, IconProps, useBreakpointValue } from '@chakra-ui/react';

export default function Blur(props: IconProps) {
  return (
    <Icon
      width={useBreakpointValue({ base: '50%', md: '30vw' })}
      zIndex={-1}
      height={useBreakpointValue({ base: '360px', md: '560px' })}
      viewBox="0 0 528 560"
      fill="none"
      style={{ filter: 'blur(70px)' }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#4285F4" />
      <circle cx="244" cy="106" r="139" fill="#E94235" />
      <circle cy="291" r="139" fill="#FABB06" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#4285F4" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#34A854" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#FABB06" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#34A854" />
    </Icon>
  );
}
