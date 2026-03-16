import clsx from "clsx";
import svgPaths from "./svg-x9glbz61a3";
import { imgGroup } from "./svg-fhwa9";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[36px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Group({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}')` }} className="absolute inset-[15.75%_0.43%_11.67%_5.65%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-47.25px] mask-size-[1080px_267px]">
      <div className="absolute inset-[-0.44%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080.42 218.715">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Vector1Props = {
  additionalClassNames?: string;
};

function Vector1({ additionalClassNames = "" }: Vector1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #888888)" />
        </svg>
      </div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ additionalClassNames = "" }: VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #888888)" />
        </svg>
      </div>
    </div>
  );
}
type PText1Props = {
  text: string;
  additionalClassNames?: string;
};

function PText1({ text, additionalClassNames = "" }: PText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[15.988px] items-center left-[24px] top-[156px]", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PText({ text, additionalClassNames = "" }: PTextProps) {
  return (
    <div className={clsx("absolute h-[20px] left-[24px] top-[88px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanText1Props = {
  text: string;
};

function SpanText1({ text }: SpanText1Props) {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

function TrendingUp() {
  return (
    <Wrapper2>
      <g id="TrendingUp">
        <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </Wrapper2>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute h-[36px] left-[24px] top-[112px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[-1.6px] whitespace-nowrap">{text}</p>
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

export default function Week() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Week">
      <div className="bg-[#f9fafb] content-stretch flex h-[775px] items-start relative shrink-0 w-full" data-name="div">
        <div className="bg-white h-[775px] relative shrink-0 w-[255px]" data-name="aside">
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
                <div className="absolute bg-[#2ca01c] content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <div className="h-[24px] relative shrink-0 w-[77.113px]" data-name="span">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-2.2px] whitespace-nowrap">Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="li">
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223.2px]" data-name="NavLink">
                  <Icon>
                    <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <SpanText text="Invoices" additionalClassNames="w-[56.775px]" />
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
            <div className="absolute content-stretch flex flex-col h-[96.8px] items-start left-0 pt-[16.8px] px-[16px] top-[658px] w-[255.2px]" data-name="div">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
              <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
                    <Container additionalClassNames="bg-[#2ca01c] rounded-[26843500px] size-[40px]">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">JD</p>
                    </Container>
                    <div className="h-[35.987px] relative shrink-0 w-[109.162px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="h-[20px] relative shrink-0 w-full" data-name="p">
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-0.2px] whitespace-nowrap">Lagmay, Justine Carl</p>
                        </div>
                        <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="p">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">carllagmay1005@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[775px] relative shrink-0 w-[1283px]" data-name="Main Content">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] px-[32px] relative rounded-[inherit] size-full">
            <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between relative size-full">
                  <div className="h-[68px] relative shrink-0 w-[325.013px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="h-[36px] relative shrink-0 w-full" data-name="h1">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[-1.6px] whitespace-nowrap">Dashboard</p>
                      </div>
                      <div className="h-[24px] relative shrink-0 w-full" data-name="p">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.2px] whitespace-nowrap">{`Welcome back! Here's your financial overview.`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white h-[45.6px] relative rounded-[10px] shrink-0 w-[226.463px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start pb-[0.8px] pl-[4.8px] pr-[0.8px] pt-[4.8px] relative size-full">
                      <Wrapper additionalClassNames="bg-[#00a63e] w-[67.4px]">
                        <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[34px] not-italic text-[#4a5565] text-[14px] text-center top-[7.8px] whitespace-nowrap">week</p>
                      </Wrapper>
                      <Wrapper additionalClassNames="shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[74.688px]">
                        <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[37px] not-italic text-[#4a5565] text-[14px] text-center top-[7.8px] whitespace-nowrap">month</p>
                      </Wrapper>
                      <Wrapper additionalClassNames="w-[58.775px]">
                        <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[29px] not-italic text-[#4a5565] text-[14px] text-center top-[7.8px] whitespace-nowrap">year</p>
                      </Wrapper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[197.588px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute bg-white border-[#f3f4f6] border-[0.8px] border-solid h-[197.588px] left-0 rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[383.725px]" data-name="button">
                <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[334.125px]" data-name="div">
                  <Container additionalClassNames="bg-[#e8f5e6] rounded-[10px] size-[48px]">
                    <Wrapper3>
                      <g id="DollarSign">
                        <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #2CA01C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #2CA01C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </Wrapper3>
                  </Container>
                  <Container1 additionalClassNames="w-[56.325px]">
                    <TrendingUp />
                    <SpanText1 text="12.5%" />
                  </Container1>
                </div>
                <PText text="Total Revenue" additionalClassNames="w-[334.125px]" />
                <Text text="$67,450" additionalClassNames="w-[334.125px]" />
                <PText1 text="This month" additionalClassNames="w-[334.125px]" />
              </div>
              <div className="absolute bg-white border-[#f3f4f6] border-[0.8px] border-solid h-[197.588px] left-[407.73px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[383.738px]" data-name="button">
                <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[334.138px]" data-name="div">
                  <Container additionalClassNames="bg-[#fff7ed] rounded-[10px] size-[48px]">
                    <Wrapper3>
                      <g id="Receipt">
                        <path d={svgPaths.p104a6f80} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p3836560} id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M12 17.5V6.5" id="Vector_3" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </Wrapper3>
                  </Container>
                  <Container1 additionalClassNames="w-[50.688px]">
                    <Wrapper2>
                      <g id="TrendingDown">
                        <path d={svgPaths.pa1bcac0} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p2f7f3780} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </Wrapper2>
                    <Wrapper1>
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#e7000b] text-[14px] top-[-0.2px] whitespace-nowrap">5.2%</p>
                    </Wrapper1>
                  </Container1>
                </div>
                <PText text="Monthly Expenses" additionalClassNames="w-[334.138px]" />
                <Text text="$38,200" additionalClassNames="w-[334.138px]" />
                <PText1 text="This month" additionalClassNames="w-[334.138px]" />
              </div>
              <div className="absolute bg-white border-[#f3f4f6] border-[0.8px] border-solid h-[197.588px] left-[815.46px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[383.725px]" data-name="button">
                <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[334.125px]" data-name="div">
                  <Container additionalClassNames="bg-[#eff6ff] rounded-[10px] size-[48px]">
                    <Wrapper3>
                      <g id="TrendingUp">
                        <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </Wrapper3>
                  </Container>
                  <Container1 additionalClassNames="w-[50.688px]">
                    <TrendingUp />
                    <SpanText1 text="8.3%" />
                  </Container1>
                </div>
                <PText text="Net Profit" additionalClassNames="w-[334.125px]" />
                <Text text="$29,250" additionalClassNames="w-[334.125px]" />
                <PText1 text="This month" additionalClassNames="w-[334.125px]" />
              </div>
            </div>
            <div className="bg-white h-[401.6px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              <div className="content-stretch flex flex-col gap-[24px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
                <div className="h-[28px] relative shrink-0 w-full" data-name="h2">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-1.2px] whitespace-nowrap">Cash Flow</p>
                </div>
                <div className="h-[300px] relative shrink-0 w-full" data-name="AreaChart">
                  <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1150px]" data-name="Icon">
                    <div className="absolute contents inset-[1.67%_0.43%_11.67%_5.65%]" data-name="Group">
                      <div className="absolute inset-[1.67%_0.43%_11.67%_5.65%]" data-name="Group">
                        <div className="absolute inset-[-0.19%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 261">
                            <g id="Group">
                              <path d="M0 260.5H1080" id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                              <path d="M0 195.5H1080" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                              <path d="M0 130.5H1080" id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                              <path d="M0 65.5H1080" id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                              <path d="M0 0.5H1080" id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[1.67%_0.43%_11.67%_5.65%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1081 260">
                          <g id="Group">
                            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                            <path d="M216.5 0V260" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                            <path d="M432.5 0V260" id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                            <path d="M648.5 0V260" id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                            <path d="M864.5 0V260" id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                            <path d="M1080.5 0V260" id="Vector_6" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[88.33%_0.12%_5.16%_4.74%]" data-name="Group">
                      <div className="absolute inset-[88.33%_0.43%_11.67%_5.65%]" data-name="Vector">
                        <div className="absolute inset-[-0.5px_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 1">
                            <path d="M0 0.5H1080" id="Vector" stroke="var(--stroke-0, #888888)" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute contents inset-[88.33%_0.12%_5.16%_4.74%]" data-name="Group">
                        <div className="absolute contents inset-[88.33%_93.43%_5.16%_4.74%]" data-name="Group">
                          <Vector additionalClassNames="inset-[88.33%_94.35%_9.67%_5.65%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_93.43%_5.16%_4.74%] leading-[normal] not-italic text-[#888] text-[12px] text-center whitespace-nowrap">Jan</p>
                        </div>
                        <div className="absolute contents inset-[88.33%_74.65%_5.16%_23.52%]" data-name="Group">
                          <Vector additionalClassNames="inset-[88.33%_75.57%_9.67%_24.43%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_74.65%_5.16%_23.52%] leading-[normal] not-italic text-[#888] text-[12px] text-center whitespace-nowrap">Feb</p>
                        </div>
                        <div className="absolute contents inset-[88.33%_55.83%_5.16%_42.26%]" data-name="Group">
                          <Vector additionalClassNames="inset-[88.33%_56.78%_9.67%_43.22%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_55.83%_5.16%_42.26%] leading-[normal] not-italic text-[#888] text-[12px] text-center whitespace-nowrap">Mar</p>
                        </div>
                        <div className="absolute contents inset-[88.33%_37.13%_5.16%_61.13%]" data-name="Group">
                          <Vector additionalClassNames="inset-[88.33%_38%_9.67%_62%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_37.13%_5.16%_61.13%] leading-[normal] not-italic text-[#888] text-[12px] text-center whitespace-nowrap">Apr</p>
                        </div>
                        <div className="absolute contents inset-[88.33%_18.17%_5.16%_79.74%]" data-name="Group">
                          <Vector additionalClassNames="inset-[88.33%_19.22%_9.67%_80.78%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_18.17%_5.16%_79.74%] leading-[normal] not-italic text-[#888] text-[12px] text-center whitespace-nowrap">May</p>
                        </div>
                        <div className="absolute contents inset-[88.33%_0.12%_5.16%_98.05%]" data-name="Group">
                          <Vector additionalClassNames="inset-[88.33%_0.43%_9.67%_99.57%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_0.12%_5.16%_98.05%] leading-[normal] not-italic text-[#888] text-[12px] text-center whitespace-nowrap">Jun</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[1.42%_94.35%_9.25%_1.65%]" data-name="Group">
                      <div className="absolute inset-[1.67%_94.35%_11.67%_5.65%]" data-name="Vector">
                        <div className="absolute inset-[0_-0.5px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 260">
                            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #888888)" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute contents inset-[1.42%_94.35%_9.25%_1.65%]" data-name="Group">
                        <div className="absolute contents inset-[85.75%_94.35%_9.25%_4.26%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[88.33%_94.35%_11.67%_5.13%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[85.75%_95.04%_9.25%_4.26%] leading-[normal] not-italic text-[#888] text-[12px] text-right whitespace-nowrap">0</p>
                        </div>
                        <div className="absolute contents inset-[64.09%_94.35%_30.91%_1.65%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[66.67%_94.35%_33.33%_5.13%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.09%_95.04%_30.91%_1.65%] leading-[normal] not-italic text-[#888] text-[12px] text-right whitespace-nowrap">20000</p>
                        </div>
                        <div className="absolute contents inset-[42.42%_94.35%_52.58%_1.65%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[45%_94.35%_55%_5.13%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.42%_95.04%_52.58%_1.65%] leading-[normal] not-italic text-[#888] text-[12px] text-right whitespace-nowrap">40000</p>
                        </div>
                        <div className="absolute contents inset-[20.75%_94.35%_74.25%_1.65%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[23.33%_94.35%_76.67%_5.13%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_95.04%_74.25%_1.65%] leading-[normal] not-italic text-[#888] text-[12px] text-right whitespace-nowrap">60000</p>
                        </div>
                        <div className="absolute contents inset-[1.42%_94.35%_93.58%_1.65%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[1.67%_94.35%_98.33%_5.13%]" />
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.42%_95.04%_93.58%_1.65%] leading-[normal] not-italic text-[#888] text-[12px] text-right whitespace-nowrap">80000</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[0_0.43%_11%_5.65%]" data-name="Group">
                      <div className="absolute contents inset-[0_0.43%_11%_5.65%]" data-name="Group">
                        <div className="absolute contents inset-[0_0.43%_11%_5.65%]" data-name="Clip path group">
                          <div className="absolute contents inset-[15.75%_0.43%_11.67%_5.65%]" data-name="Group">
                            <Group>
                              <g id="Group">
                                <path d={svgPaths.p3acfd300} fill="url(#paint0_linear_1_4989)" fillOpacity="0.6" id="Vector" />
                                <path d={svgPaths.pee0740} id="Vector_2" stroke="var(--stroke-0, #2CA01C)" strokeWidth="2" />
                              </g>
                              <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4989" x1="0.156051" x2="0.156051" y1="0.965226" y2="218.715">
                                  <stop offset="0.05" stopColor="#2CA01C" stopOpacity="0.3" />
                                  <stop offset="0.95" stopColor="#2CA01C" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </Group>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[0_0.43%_11%_5.65%]" data-name="Group">
                      <div className="absolute contents inset-[0_0.43%_11%_5.65%]" data-name="Group">
                        <div className="absolute contents inset-[0_0.43%_11%_5.65%]" data-name="Clip path group">
                          <div className="absolute contents inset-[15.75%_0.43%_11.67%_5.65%]" data-name="Group">
                            <Group>
                              <g id="Group">
                                <path d={svgPaths.p3acfd300} fill="url(#paint0_linear_1_4973)" fillOpacity="0.6" id="Vector" />
                                <path d={svgPaths.pee0740} id="Vector_2" stroke="var(--stroke-0, #F97316)" strokeWidth="2" />
                              </g>
                              <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4973" x1="0.156051" x2="0.156051" y1="0.965226" y2="218.715">
                                  <stop offset="0.05" stopColor="#F97316" stopOpacity="0.3" />
                                  <stop offset="0.95" stopColor="#F97316" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </Group>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}