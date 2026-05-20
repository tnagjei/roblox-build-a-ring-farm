"use client";

// input: Smartlink 广告链接
// output: 一个可复用的 CTA 按钮组件
// pos: components/SmartLink.tsx (更新规则：链接失效或变更时修改此文件)

import React from 'react';

/**
 * SmartLink 组件
 * 用于展示具有吸引力的 CTA 按钮。
 */
export default function SmartLink({
  label = "Exclusive Rewards",
  className = ""
}: {
  label?: string,
  className?: string
}) {
  const smartLinkUrl = "https://www.profitablecpmratenetwork.com/gt0g5tk264?key=2b67b009623c38312e243ddbea938570";

  return (
    <a
      href={smartLinkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`smart-link-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 16px',
        backgroundColor: '#ff4d4d',
        color: 'white',
        borderRadius: '6px',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <span style={{ marginRight: '6px' }}>🔥</span>
      {label}
    </a>
  );
}
