import MyPageLayout from "@/components/mypage/MyPageLayout";
import ElectronicReceiptPop from "@/components/popup/ElectronicReceiptPop";
import PaymentCreatePop from "@/components/popup/PaymentCreatePop";

export default function MyPage() {
  return (
    <>
      <MyPageLayout />
      {/* 전자 영수증 확인 */}
      <ElectronicReceiptPop />
      {/* 결제수단 등록 */}
      <PaymentCreatePop />
    </>
  )
}