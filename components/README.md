# @yeji0214/modal

React 환경에서 접근성과 재사용성을 고려한 모달 컴포넌트입니다.

[![npm version](https://img.shields.io/npm/v/@yeji0214/modal.svg)](https://www.npmjs.com/package/@yeji0214/modal)
[![license](https://img.shields.io/npm/l/@yeji0214/modal.svg)](LICENCSE)

---

## ✨ 특징

- React 18+ 지원
- Emotion 기반의 커스터마이징 가능한 스타일

---

## 📦 설치

```bash
npm install @yeji0214/modal
```

> ⚠️ 이 패키지는 `react`, `react-dom`, `@emotion/react`, `@emotion/styled`를 peerDependencies로 사용합니다.  
> 사용 전에 반드시 해당 패키지들을 설치해주세요.

---

## 🧩 사용법

```tsx
import { Modal, useModal } from "@yeji0214/modal";

function App() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>안녕하세요 👋</h2>
        <p>이것은 모달입니다.</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
}
```

---

## 🛠️ Props

| Prop                  | Type                                                  | Required | Description |
|-----------------------|-------------------------------------------------------|----------|-------------|
| `position`            | `"center"` \| `"bottom"` \| `"top"`                   | ✅       | 모달이 화면 어디에 위치할지 설정합니다. |
| `title`               | `string`                                              | ✅       | 모달 상단에 표시할 제목입니다. |
| `content`             | `React.ReactNode`                                     | ✅       | 모달 본문에 들어갈 내용입니다. |
| `hasCloseButton`      | `boolean`                                             | ✅       | 우측 상단에 닫기 버튼을 표시할지 여부입니다. |
| `onClose`             | `() => void`                                          | ✅       | 모달을 닫을 때 실행되는 콜백 함수입니다. (닫기 버튼, 백드롭 클릭 시 호출) |
| `handleBackdropClick` | `(e: React.MouseEvent<HTMLDivElement>) => void`       | ❌       | 백드롭을 클릭했을 때 실행할 커스텀 함수입니다. 기본 `onClose`와는 별개로 작동합니다. |
| `confirmText`         | `string`                                              | ❌       | 하단에 표시할 확인 버튼의 텍스트입니다. (ex: "확인", "제출") |
| `onConfirm`           | `() => void`                                          | ❌       | 확인 버튼 클릭 시 실행될 콜백 함수입니다. `confirmText`가 있어야 버튼이 표시됩니다. |


---

## 📃 라이선스

MIT © 정예지
