import { ButtonPrimary } from '@/components/buttons/button-primary'

export function QuestionButtonSubmit({ onPress }: { onPress: () => void }) {
  
  return (
    <ButtonPrimary 
      title='Verificar'
      onPress={onPress}
    />
  )
}