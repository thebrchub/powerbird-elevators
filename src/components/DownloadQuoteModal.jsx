import ModalShell from './ModalShell'
import InquiryForm from './InquiryForm'

export default function DownloadQuoteModal({ open, onClose }) {
  return (
    <ModalShell open={open} onClose={onClose} title="Download Quotation">
      <InquiryForm submitLabel="Download Quote" />
    </ModalShell>
  )
}
