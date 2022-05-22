import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Badge,
  Button,
} from '@chakra-ui/react'
import { localeType } from '../../@types/localeType';
import { useWindowSize } from '../../hooks/useWindowSize';
import { normalizeWorldFlagsLanguage } from '../../translations/world-flags/normalizeWorldFlagsLanguage';
import { convertSecoundsToMmSs } from '../../utils/convertSecoundsToMmSs';

type WorldFlagsFoundStatusProps = {
  foundLenght: number
  totalLenght: number
  currentFlagNumber: number
  onLeave: () => void
  flagFound: boolean
  currentSeconds: number
  locale: localeType
}

export function WorldFlagsFoundStatus({ foundLenght, totalLenght, currentFlagNumber, onLeave, flagFound, currentSeconds, locale }: WorldFlagsFoundStatusProps) {
  const { translation } = normalizeWorldFlagsLanguage(locale)

  const { width } = useWindowSize()

  const isSmallerThan400px = width < 400

  return (
    <TableContainer>
      <Table variant='unstyled' size='sm'>
        <TableCaption mt='0'>
          <Button isFullWidth colorScheme='red' variant='outline' onClick={onLeave} size={isSmallerThan400px ? "sm" : "md"}>
            {translation.end_game}
          </Button>
        </TableCaption>

        <Thead>
          <Tr>
            <Th>{translation.found}</Th>
            <Th>{translation.current}</Th>
            <Th isNumeric>{translation.time}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text as='span' fontSize={isSmallerThan400px ? "large" : "x-large"} fontWeight='bold'>
                {foundLenght}
              </Text>
              <Text as='span' fontSize='md' fontWeight='400' mx='1'>
                {translation.of}
              </Text>
              <Text as='span' fontSize={isSmallerThan400px ? "large" : "x-large"} fontWeight='bold'>
                {totalLenght}
              </Text>
            </Td>
            <Td>
              <Text as='span' fontSize={isSmallerThan400px ? "large" : "x-large"} fontWeight='bold'>
                {currentFlagNumber}
              </Text>
              <Badge variant='outline' colorScheme={flagFound ? "green" : "red"} ml='1.5' size='xsm'>
                {flagFound ? translation.found : translation.not_found}
              </Badge>
            </Td>
            <Td isNumeric>
              <Text as='span' fontSize={isSmallerThan400px ? "large" : "x-large"} fontWeight='bold'>
                {convertSecoundsToMmSs(currentSeconds)}
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
