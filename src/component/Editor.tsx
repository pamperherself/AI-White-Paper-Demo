import { useMemo, useState } from 'react';
import {
  ArrowRightLeft,
  BadgeCheck,
  BookMarked,
  Brain,
  ChevronRight,
  ClipboardList,
  FileStack,
  FileUp,
  Fingerprint,
  Minus,
  Plus,
  Sparkles,
  Upload,
} from 'lucide-react';

const steps = ['Start', 'Add Guidelines', 'Check Outline', 'Choose Sources', 'Get Draft'];

const documentTypes = [
  '政策分析报告',
  '市场研究报告',
  '技术白皮书',
  '投资分析',
  '行业趋势报告',
  '其他',
];

const citationStyles = ['APA7', 'MLA9', 'Harvard', 'GB/T 7714'];

const reportLengths = ['5-10页', '10-20页', '20-50页', '50页以上'];

const knowledgeBases = [
  { id: 'policy', label: '能源政策数据库' },
  { id: 'technical', label: '技术标准库' },
  { id: 'market', label: '市场数据仓库' },
  { id: 'custom', label: '企业定制知识库' },
];

export default function Editor() {
  const [activeStep] = useState(0);
  const [selectedDocType, setSelectedDocType] = useState('政策分析报告');
  const [citationStyle, setCitationStyle] = useState('APA7');
  const [reportLength, setReportLength] = useState('10-20页');
  const [sourceCount, setSourceCount] = useState(5);
  const [useKnowledgeBase, setUseKnowledgeBase] = useState(true);
  const [selectedKB, setSelectedKB] = useState<string[]>(['policy', 'technical']);
  const [uploadOwnDraft, setUploadOwnDraft] = useState(false);

  const toggleKnowledgeBase = (id: string) => {
    setSelectedKB(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const progressItems = useMemo(
    () =>
      steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        return (
          <div key={step} className="flex items-center">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                  : isCompleted
                  ? 'bg-blue-100 text-blue-600 border border-blue-300'
                  : 'bg-white text-slate-400 border border-slate-200'
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`ml-3 text-sm font-medium transition-colors ${
                isActive ? 'text-blue-700' : isCompleted ? 'text-blue-500' : 'text-slate-400'
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <ChevronRight className="mx-3 text-slate-300" size={16} />
            )}
          </div>
        );
      }),
    [activeStep]
  );

  return (
    <main className="w-full lg:w-2/3 xl:w-[68%] px-6 py-6">
      <div className="bg-white/80 rounded-3xl border border-white/70 shadow-[0_20px_60px_rgba(59,130,246,0.15)] backdrop-blur-md p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">白皮书生成流程</h2>
            <p className="text-sm text-slate-500 mt-1">按照步骤配置储能白皮书生成参数,智能输出专业文档。</p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            <Brain size={16} />智能策略推荐
          </button>
        </div>

        <div className="flex flex-wrap gap-5">{progressItems}</div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="space-y-6">
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <BadgeCheck size={18} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">报告类型</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {documentTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedDocType(type)}
                    className={`px-4 py-3 rounded-xl border transition-all text-sm font-medium flex items-center justify-between group ${
                      selectedDocType === type
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm shadow-blue-200/40'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 text-slate-600'
                    }`}
                  >
                    <span>{type}</span>
                    {selectedDocType === type && (
                      <Sparkles size={16} className="text-blue-500" />
                    )}
                  </button>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ClipboardList size={18} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">引用格式</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {citationStyles.map(style => (
                  <button
                    key={style}
                    onClick={() => setCitationStyle(style)}
                    className={`px-4 py-3 rounded-xl border transition-all text-sm font-medium ${
                      citationStyle === style
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm shadow-blue-200/40'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 text-slate-600'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <FileStack size={18} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">报告篇幅</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {reportLengths.map(length => (
                  <button
                    key={length}
                    onClick={() => setReportLength(length)}
                    className={`px-4 py-3 rounded-xl border transition-all text-sm font-medium ${
                      reportLength === length
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm shadow-blue-200/40'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 text-slate-600'
                    }`}
                  >
                    {length}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-white rounded-2xl border border-cyan-200 shadow-[0_16px_40px_rgba(34,211,238,0.2)] p-6 space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-inner">
                    <Fingerprint size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">使用知识库</h3>
                    <p className="text-xs text-slate-500 mt-0.5">选择关联的储能领域知识库资源</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useKnowledgeBase}
                    onChange={(e) => setUseKnowledgeBase(e.target.checked)}
                  />
                  <span className="w-12 h-6 bg-slate-200 rounded-full peer-checked:bg-cyan-400 transition-colors relative">
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${useKnowledgeBase ? 'translate-x-6' : ''}`} />
                  </span>
                </label>
              </div>

              {useKnowledgeBase && (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedKB.map(id => {
                      const item = knowledgeBases.find(kb => kb.id === id);
                      if (!item) return null;
                      return (
                        <span
                          key={id}
                          className="px-3 py-1.5 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full border border-cyan-200 shadow-sm"
                        >
                          {item.label}
                        </span>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {knowledgeBases.map(item => (
                      <label
                        key={item.id}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all cursor-pointer ${
                          selectedKB.includes(item.id)
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-600 shadow-sm shadow-cyan-200/50'
                            : 'border-cyan-200 hover:border-cyan-400 bg-white text-slate-600'
                        }`}
                      >
                        <span>{item.label}</span>
                        <input
                          type="checkbox"
                          checked={selectedKB.includes(item.id)}
                          onChange={() => toggleKnowledgeBase(item.id)}
                          className="h-4 w-4 accent-cyan-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </section>

            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <BookMarked size={18} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">引用源数量</h3>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setSourceCount(prev => Math.max(1, prev - 1))}
                  className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-3xl font-semibold text-blue-600">{sourceCount}</span>
                <button
                  onClick={() => setSourceCount(prev => prev + 1)}
                  className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <p className="text-xs text-slate-500">建议使用真实可追溯的政策、市场、技术数据作为引用来源。</p>
            </section>

            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ArrowRightLeft size={18} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">自有草稿上传</h3>
              </div>
              <label className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl cursor-pointer border border-slate-200">
                <span className="text-sm text-slate-600">我已有草稿并希望继续完善</span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={uploadOwnDraft}
                  onChange={(e) => setUploadOwnDraft(e.target.checked)}
                />
                <span className="w-12 h-6 bg-slate-200 rounded-full flex items-center px-1">
                  <span
                    className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${uploadOwnDraft ? 'translate-x-6 bg-blue-500' : ''}`}
                  />
                </span>
              </label>

              {uploadOwnDraft && (
                <div className="border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/50 p-6 text-center space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Upload size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">拖拽或点击上传现有白皮书草稿</p>
                    <p className="text-xs text-slate-500 mt-1">支持 DOCX / PDF / Markdown / TXT / PPTX</p>
                  </div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full shadow-sm hover:bg-blue-600 transition-colors">
                    <FileUp size={16} /> 选择文件
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <Sparkles size={18} className="text-blue-500" />
            <span>AI将根据已选参数生成储能白皮书初稿,可随时调整。</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              保存草稿
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all">
              生成初稿
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
