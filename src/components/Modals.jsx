// Modals.jsx
import { Modal, TextInput, PasswordInput, Button } from '@mantine/core';


// =========================
// LOGIN MODAL
// =========================
export  function LoginModal({ opened, onClose }) {
  return (
    <Modal opened={opened} onClose={onClose} title="Login" centered>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextInput label="Email" placeholder="your@email.com" />
        <PasswordInput label="Password" placeholder="Your password" />
        <Button fullWidth mt="md">Login</Button>
      </div>
    </Modal>
  );
}


// =========================
// APPLY DEVICE MODAL
// =========================
export  function ApplyDeviceModal({ opened, onClose }) {
  return (
    <Modal opened={opened} onClose={onClose} title="Apply for Device" centered>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextInput label="Full Name" placeholder="Enter your name" />
        <TextInput label="Phone Number" placeholder="Enter your number" />
        <TextInput label="Address" placeholder="Your address" />
        <TextInput label="Reason for applying" placeholder="Tell us why you need it" />

        <Button fullWidth mt="md">Submit Application</Button>
      </div>
    </Modal>
  );
}
