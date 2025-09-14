import { FiAlertCircle, FiCheck } from "react-icons/fi"
import { Button } from "@/components/ui/Button"
import { SubmitMessage, SubmitMessageVariant } from "@/components/ui/SubmitMessage"

type SubmitButtonProps = {
    isSubmitted: boolean,
    submitMessageType: SubmitMessageVariant
}

export const SubmitButton = ({ isSubmitted, submitMessageType }: SubmitButtonProps) => {
    return (
        <>
            <Button
                label={'Ajouter un nouveau produit au menu'}
                variant={'success'}
            />
            {isSubmitted && (
                <SubmitMessage
                    label={submitMessageType === 'success' ? 'Ajouté avec succès !' : `Le prix n'est pas au bon format.`}
                    Icon={submitMessageType === 'success' ? FiCheck : FiAlertCircle}
                    variant={submitMessageType}
                />
            )}
        </>
    )
}
