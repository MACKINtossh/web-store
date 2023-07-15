"use client";
// GLOBAL IMPORTS

// LOCAL IMPORTS
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  // Adding storeModal state and using its' values to control whether the store is open or closed
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Create a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Create Store Form
    </Modal>
  );
};
