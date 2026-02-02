export default function PartnerSelect() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Partner Selection</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <div className="bp-sel-txt">접속할 대상을 선택해 주세요.</div>
              <div className="pop-form-content">
                <div className="pop-form-item">
                  <div className="pop-form-tit">
                    본사/가맹점/점포 <span className="red">*</span>
                  </div>
                  <div className="pop-form-filed">
                    <select className="select-form">
                      <option value="">플랫폼 관리자(전체)</option>
                      <option value="">(운영)따름인 (본사 데이터)</option>
                      <option value="">- (상담중) 힘이나는커피생활 무교점 (직영 데이터)</option>
                      <option value="">--(미운영)힘이나는커피생활 종로3가 (가맹,점포 데이터)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
