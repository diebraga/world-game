import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Flag from 'react-world-flags'

type WorldFlagCardProps = {
  code: string
  currentFlagWasFound: boolean
  name: string
  isDisabled: boolean
  setCountryFlagInput: Dispatch<SetStateAction<string>>
  countryFlagInput: string
}

export function WorldFlagCard({ code, currentFlagWasFound, name, isDisabled, setCountryFlagInput, countryFlagInput }: WorldFlagCardProps) {
  return (
    <Box position='relative' className='centered-element-carousel' h='99%'>
      <Box textAlign='center' mx='2' my='2'>
        {currentFlagWasFound === true && (
          <Heading as='h2' fontSize='x-large'>
            {name}
          </Heading>
        )}
        {!currentFlagWasFound && (
          <Input
            maxLength={30}
            isDisabled={isDisabled}
            onChange={e => setCountryFlagInput(e.target.value)}
            value={countryFlagInput}
            textAlign='center' />
        )}
      </Box>
      <Center>
        <Flag code={code} />
      </Center>
    </Box>
  )
}
