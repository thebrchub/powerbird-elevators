import ModalShell from './ModalShell'
import InquiryForm from './InquiryForm'

export default function GetInTouchModal({ open, onClose }) {
  return (
    <ModalShell open={open} onClose={onClose} title="Get in Touch">
      <InquiryForm submitLabel="Send Message" />
    </ModalShell>
  )
}
