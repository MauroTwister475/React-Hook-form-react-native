import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'

interface AdditionalButtonIconProps extends TouchableOpacityProps {
  children: ReactNode,
  headerModal?: boolean,
}

export function AdditionalButtonIcon({ headerModal, children, ...rest }: AdditionalButtonIconProps) {
  return (
    <TouchableOpacity style={headerModal ? Styles.container : {} } activeOpacity={0.4} {...rest}>
      <>{children}</>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    left: -4,
  }
})