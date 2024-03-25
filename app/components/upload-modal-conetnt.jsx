import * as Dialog from '@radix-ui/react-dialog';

export default function UploadModalContent() {
  return (
    <>
      <Dialog.Title className="DialogTitle">File size exceeded</Dialog.Title>
      <Dialog.Description className="DialogDescription">
        Please upload a file with size less than 5mb
      </Dialog.Description>
    </>
  );
}
