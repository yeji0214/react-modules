# @yeji0214/hooks

카드 등록 UI에 특화된 커스텀 훅 모음입니다.

[![npm version](https://img.shields.io/npm/v/@yeji0214/hooks.svg)](https://www.npmjs.com/package/@yeji0214/hooks)
[![license](https://img.shields.io/npm/l/@yeji0214/hooks.svg)](LICENSE)

---

## ✨ 제공 훅 목록

| 훅 이름 | 사용 목적 |
|--------|-----------|
| `useCardNumberInput` | 4칸 카드 번호 입력 상태 관리 |
| `useExpiryDateInput` | 유효 기간(MM/YY) 입력 관리 |
| `useSingleInput`     | CVC, 비밀번호 등 단일 인풋 처리 |

---

## 📦 설치

```bash
npm install @yeji0214/hooks
```

> ⚠️ `react`, `react-dom`이 peerDependencies로 지정되어 있어 사용자가 직접 설치해야 합니다.

---

## 🧩 사용법

### 1. 카드 번호 입력 - `useCardNumberInput`

```tsx
import { useCardNumberInput } from "@yeji0214/hooks";

const CardNumberInput = () => {
  const { cardNumberState, errorMessage, handleInputChange } = useCardNumberInput();

  return (
    <div>
      {cardNumberState.map((item, index) => (
        <input
          key={index}
          value={item.value}
          onChange={(e) => handleInputChange(e, index)}
          maxLength={4}
        />
      ))}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
```

#### ✅ 반환 값

| 항목 | 타입 | 설명 |
|------|------|------|
| `cardNumberState` | `{ value: string; isValid: boolean }[]` | 4개의 카드 번호 입력 상태 |
| `errorMessage` | `string` | 유효성 검사 실패 시 표시할 메시지 |
| `handleInputChange` | `(e, index) => void` | 입력 변경 핸들러 |

---

### 2. 유효 기간 입력 - `useExpiryDateInput`

```tsx
import { useExpiryDateInput } from "@yeji0214/hooks";

const ExpiryInput = () => {
  const { expiryDateState, errorMessage, handleInputChange } = useExpiryDateInput();

  return (
    <div>
      <input
        placeholder="MM"
        value={expiryDateState[0].value}
        onChange={(e) => handleInputChange(e, 0)}
        maxLength={2}
      />
      <input
        placeholder="YY"
        value={expiryDateState[1].value}
        onChange={(e) => handleInputChange(e, 1)}
        maxLength={2}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
```

#### ✅ 반환 값

| 항목 | 타입 | 설명 |
|------|------|------|
| `expiryDateState` | `{ value: string; isValid: boolean }[]` | 월(MM), 년(YY) 상태 |
| `errorMessage` | `string` | 유효성 검사 메시지 (월 또는 년 오류) |
| `handleInputChange` | `(e, index) => void` | 입력 핸들러 |

---

### 3. CVC/비밀번호 등 단일 인풋 - `useSingleInput`

```tsx
import { useSingleInput } from "@yeji0214/hooks";

const CVCInput = () => {
  const { singleState, errorMessage, handleInputChange } = useSingleInput(3);

  return (
    <div>
      <input
        value={singleState.value}
        onChange={handleInputChange}
        maxLength={3}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
```

#### ✅ 반환 값

| 항목 | 타입 | 설명 |
|------|------|------|
| `singleState` | `{ value: string; isValid: boolean }` | 단일 인풋의 상태 |
| `errorMessage` | `string` | 유효성 메시지 |
| `handleInputChange` | `(e) => void` | 입력 핸들러 |

---

## 🧪 유효성 검사 항목

- 숫자만 입력 가능
- 입력 자리 수 일치 여부 확인
- 유효하지 않은 월(MM) / 연도(YY) 예외 처리

---

## 📃 라이선스

MIT © 정예지
