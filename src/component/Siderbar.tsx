import {
  Archive,
  Bot,
  ChevronDown,
  Database,
  FileSearch,
  Globe,
  LibraryBig,
  Search,
  Sparkles,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const historyRecords = [
  { id: 1, title: '国内储能政策调研', date: '2025/10/15' },
  { id: 2, title: '国外储能政策', date: '2025/10/12' },
  { id: 3, title: '储能市场规模', date: '2025/10/08' },
];

const sourceData = [
  { name: '国家能源局公告2025-08', type: '政策PDF', size: '2.4MB' },
  { name: '能源企业调研问卷', type: '问卷Excel', size: '540KB' },
  { name: '市场交易数据', type: 'CSV数据集', size: '1.8MB' },
];

export default function Sidebar() {
  const [activeRecord, setActiveRecord] = useState<number | null>(1);
  const [showSources, setShowSources] = useState(true);

  const historyItems = useMemo(
    () => historyRecords.map(record => (
      <button
        key={record.id}
        onClick={() => setActiveRecord(record.id)}
        className={`group w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border border-transparent flex flex-col gap-1 ${
          activeRecord === record.id
            ? 'bg-white/90 shadow-lg shadow-blue-200/40 border-blue-200'
            : 'hover:bg-white/70 hover:shadow-md hover:shadow-blue-200/30'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">{record.title}</span>
          <Archive
            size={16}
            className={`transition-colors ${
              activeRecord === record.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'
            }`}
          />
        </div>
        <span className="text-xs text-slate-500">创建于 {record.date}</span>
      </button>
    )),
    [activeRecord]
  );

  return (
    <aside className="w-full lg:w-1/3 xl:w-[32%] px-6 py-6 bg-gradient-to-b from-blue-50/80 via-white to-blue-100/40 backdrop-blur-sm border-r border-white/60">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#4A90E2] via-[#2F6BCD] to-[#1E5799] text-white text-sm font-semibold shadow-[0_12px_30px_rgba(36,99,214,0.25)] hover:shadow-[0_16px_40px_rgba(36,99,214,0.35)] transition-all duration-300"
          >
            + 新建白皮书
          </button>
        </div>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <FileSearch size={18} className="text-blue-600" />
            储能历史记录
          </h2>
          <div className="space-y-3">{historyItems}</div>
        </section>

        <section className="bg-white/80 rounded-2xl p-6 shadow-lg shadow-blue-200/35 border border-white/70 transition-all hover:shadow-blue-300/50">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-inner">
                <Search size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">AI问答检索</h3>
                <p className="text-xs text-slate-500 mt-0.5">同步检索知识库、历史记录与实时网络</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
              <Sparkles size={14} /> 智能增强
            </span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="输入问题,如: 2025 储能补贴政策"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 pr-20 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-medium shadow-sm hover:shadow-lg transition-all"
              >
                检索
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100 inline-flex items-center gap-1">
                <LibraryBig size={14} /> 知识库
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100 inline-flex items-center gap-1">
                <Archive size={14} /> 历史记录
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-50 text-slate-600 border border-slate-200 inline-flex items-center gap-1">
                <Globe size={14} /> 网络实时
              </span>
            </div>
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">推荐提问</p>
              <div className="space-y-1.5 text-xs text-slate-600">
                <button type="button" className="w-full text-left px-3 py-2 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-blue-100">✅ 对比国内外储能政策变化</button>
                <button type="button" className="w-full text-left px-3 py-2 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-blue-100">📊 获取 2025 Q3 储能市场预测数据</button>
                <button type="button" className="w-full text-left px-3 py-2 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-blue-100">🧠 查找钠离子储能技术最新突破</button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80 rounded-2xl p-5 shadow-lg shadow-blue-200/30 border border-white/70 transition-all hover:shadow-blue-300/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-inner">
                <LibraryBig size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">知识库</h3>
                <p className="text-xs text-slate-500 mt-0.5">已开启专业储能知识库对接</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-600 shadow-sm">3个可用</span>
          </div>
          <p className="text-xs text-slate-500 mt-3 leading-5">
            支持政策法规、标准文件、市场研究等多源知识库关联,一键调用。
          </p>
        </section>

        <section className="bg-white/80 rounded-2xl p-5 shadow-lg shadow-blue-200/30 border border-white/70 transition-all hover:shadow-blue-300/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-700 flex items-center justify-center shadow-inner">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">数据抽取Agent</h3>
                <p className="text-xs text-slate-500 mt-0.5">AI驱动字段识别与摘要提取</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
              <span className="text-xs font-medium text-emerald-600">运行中</span>
            </div>
          </div>
        </section>

        <section className="bg-white/75 rounded-2xl border border-white/60 shadow-md shadow-blue-200/20">
          <button
            onClick={() => setShowSources(prev => !prev)}
            className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-800 hover:bg-blue-50/70 rounded-2xl transition-colors"
          >
            <span className="flex items-center gap-2">
              <Database size={18} className="text-blue-600" />
              源数据汇总
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${showSources ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
            />
          </button>
          {showSources && (
            <div className="px-5 pb-5 space-y-3">
              {sourceData.map(item => (
                <div
                  key={item.name}
                  className="bg-blue-50/70 border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between text-sm shadow-sm"
                >
                  <div>
                    <p className="font-medium text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.type} · {item.size}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-blue-500">预览</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </aside>
  );
}
