import clsx from "clsx";
import svgPaths from "./svg-o98whuzqsn";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type ThTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ThText({ text, additionalClassNames = "" }: ThTextProps) {
  return (
    <div className={clsx("absolute h-[52.4px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[15.8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanText({ text, additionalClassNames = "" }: SpanTextProps) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-2.2px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function UserRequest() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="User request">
      <div className="bg-[#f9fafb] content-stretch flex h-[775.2px] items-start relative shrink-0 w-full" data-name="div">
        <div className="bg-white h-[775.2px] relative shrink-0 w-[256px]" data-name="aside">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute content-stretch flex flex-col h-[80.787px] items-start left-0 pb-[0.8px] pt-[24px] px-[24px] top-0 w-[255.2px]" data-name="div">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="h1">
                <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px not-italic relative text-[#2ca01c] text-[24px]">QuickBooks</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[384px] items-start left-[16px] top-[96.79px] w-[223.2px]" data-name="ul">
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Dashboard" additionalClassNames="w-[77.113px]" />
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute bg-[#2ca01c] content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <div className="h-[24px] relative shrink-0 w-[56.775px]" data-name="span">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-2.2px] whitespace-nowrap">Invoices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Expenses" additionalClassNames="w-[64.213px]" />
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Payroll" additionalClassNames="w-[46.987px]" />
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Reports" additionalClassNames="w-[54.025px]" />
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Integrations" additionalClassNames="w-[84.75px]" />
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Settings" additionalClassNames="w-[56.862px]" />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[96.8px] items-start left-0 pt-[16.8px] px-[16px] top-[678.4px] w-[255.2px]" data-name="div">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
              <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
                    <div className="bg-[#2ca01c] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">JD</p>
                      </div>
                    </div>
                    <div className="h-[35.987px] relative shrink-0 w-[109.162px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="h-[20px] relative shrink-0 w-full" data-name="p">
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-0.2px] whitespace-nowrap">John Doe</p>
                        </div>
                        <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="p">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">john@company.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[775.2px] min-h-px min-w-px relative" data-name="main">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="h-[364.8px] relative shrink-0 w-full" data-name="div">
              <div className="absolute content-stretch flex h-[68px] items-center justify-between left-[32px] top-[32px] w-[846.4px]" data-name="Container">
                <div className="h-[68px] relative shrink-0 w-[224.238px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                    <div className="h-[36px] relative shrink-0 w-full" data-name="h1">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[-1.6px] whitespace-nowrap">Invoices</p>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.2px] whitespace-nowrap">Manage and track your invoices</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2ca01c] h-[48px] relative rounded-[10px] shrink-0 w-[216.188px]" data-name="button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Wrapper additionalClassNames="absolute left-[24px] top-[14px]">
                      <g id="Plus">
                        <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </Wrapper>
                    <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[122.5px] not-italic text-[16px] text-center text-white top-[9.8px] whitespace-nowrap">Create New Invoice</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[49.6px] left-[32px] top-[132px] w-[448px]" data-name="Container">
                <div className="absolute h-[49.6px] left-0 rounded-[10px] top-0 w-[448px]" data-name="input">
                  <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Search invoices...</p>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
                <Wrapper additionalClassNames="absolute left-[12px] top-[14.8px]">
                  <g id="Search">
                    <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </Wrapper>
              </div>
              <div className="absolute h-[48.8px] left-[32px] top-[205.6px] w-[448px]" data-name="Container">
                <div className="absolute border-[#d1d5dc] border-[0.8px] border-solid h-[48.8px] left-0 rounded-[10px] top-0 w-[448px]" data-name="select">
                  <div className="absolute left-[-288.8px] size-0 top-[-206.4px]" data-name="option" />
                  <div className="absolute left-[-288.8px] size-0 top-[-206.4px]" data-name="option" />
                  <div className="absolute left-[-288.8px] size-0 top-[-206.4px]" data-name="option" />
                  <div className="absolute left-[-288.8px] size-0 top-[-206.4px]" data-name="option" />
                </div>
                <Wrapper additionalClassNames="absolute left-[12px] top-[14.4px]">
                  <g id="Filter">
                    <path d={svgPaths.p20543580} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </Wrapper>
              </div>
              <div className="absolute bg-white h-[54.4px] left-[32px] rounded-[14px] top-[278.4px] w-[846.4px]" data-name="Container">
                <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
                  <div className="h-[52.8px] relative shrink-0 w-full" data-name="table">
                    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b-[0.8px] border-solid h-[52.4px] left-0 top-0 w-[844.8px]" data-name="thead">
                      <div className="absolute h-[52.4px] left-0 top-0 w-[844.8px]" data-name="tr">
                        <ThText text="Invoice ID" additionalClassNames="left-0 w-[161.2px]" />
                        <ThText text="Client" additionalClassNames="left-[161.2px] w-[122.075px]" />
                        <ThText text="Amount" additionalClassNames="left-[283.27px] w-[143.938px]" />
                        <ThText text="Due Date" additionalClassNames="left-[427.21px] w-[154.475px]" />
                        <ThText text="Status" additionalClassNames="left-[581.69px] w-[125.438px]" />
                        <ThText text="Actions" additionalClassNames="left-[707.13px] w-[137.675px]" />
                      </div>
                    </div>
                    <div className="absolute h-0 left-0 top-[52.4px] w-[844.8px]" data-name="tbody" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}