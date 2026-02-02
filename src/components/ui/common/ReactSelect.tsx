'use client'
import { useState } from 'react'
import Select from 'react-select'

export default function ReactSelect() {
  // Select 컴포넌트 설정
  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)

  return (
    <Select
      className="erp-select"
      classNamePrefix="select"
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name="color"
      placeholder="선택"
      options={[
        { value: '김철수', label: '김철수' },
        { value: '이순신', label: '이순신' },
        { value: '박철수', label: '박철수' },
        { value: '최영희', label: '최영희' },
        { value: '장민수', label: '장민수' },
        { value: '정한나', label: '정한나' },
        { value: '오세훈', label: '오세훈' },
        { value: '신지연', label: '신지연' },
        { value: '배수진', label: '배수진' },
        { value: '이진욱', label: '이진욱' },
      ]}
    />
  )
}
