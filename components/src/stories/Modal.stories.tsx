import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Modal",
  component: Modal,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,

    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center" size="large">
          <>
            <Modal.Header>
              <>
                <Modal.Title text="카드사 선택" />
                <Modal.CloseButton
                  onCloseButtonClick={() => console.log("closeButton clicked")}
                />
              </>
            </Modal.Header>
            <Modal.ButtonContainer direction="column" position="center">
              <>
                <Modal.Button
                  color="dark"
                  size="large"
                  onClick={() => console.log("confirmButton clicked")}
                >
                  <span>동의</span>
                </Modal.Button>
                <Modal.Button
                  color="light"
                  size="large"
                  onClick={() => console.log("closeButton clicked")}
                >
                  <span>닫기</span>
                </Modal.Button>
              </>
            </Modal.ButtonContainer>
          </>
        </Modal.Container>
      </>
    ),
  },
};
