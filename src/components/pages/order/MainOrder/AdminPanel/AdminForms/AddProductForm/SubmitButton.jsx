import { FiAlertCircle, FiCheck } from "react-icons/fi"
import { Button } from "../../../../../../ui/Button"
import { SubmitMessage } from "../../../../../../ui/SubmitMessage"

export const SubmitButton = ({ isSubmitted, submitMessageType }) => {
    return (
        <>
            <Button
                label={'Ajouter un nouveau produit au menu'}
                variant={'success'}
            />
            {isSubmitted && (
                <SubmitMessage
                    label={submitMessageType === 'success' ? 'Ajouté avec succès !' : `Le prix n'est pas au bon format.`}
                    Icon={submitMessageType === 'success' ? <FiCheck /> : <FiAlertCircle />}
                    variant={submitMessageType}
                />
            )}
        </>
    )
}
