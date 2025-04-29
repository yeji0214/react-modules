import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    title: "제목",
    content: "내용",
    hasCloseButton: true,
    handleBackdropClick: () => alert("모달 외부가 클릭되었습니다."),
    confirmText: "확인",
    onConfirm: () => alert("확인 버튼이 클릭되었습니다."),
    onClose: () => alert("닫기 버튼이 클릭되었습니다."),
  },
};
