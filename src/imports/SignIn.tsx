import clsx from "clsx";
import imgImageWithFallback from "figma:asset/fdeac2fcae5f758763cbd506ab5630f07fbffbbb.png";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("flex-[1_0_0] h-[775.2px] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Sign In">
      <Container additionalClassNames="bg-white">
        <Container1 additionalClassNames="h-[403.2px] w-[448px]">
          <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[40px] relative shrink-0 w-full" data-name="h1">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#2ca01c] text-[36px] top-[-2px] whitespace-nowrap">QuickBooks</p>
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="p">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.2px] whitespace-nowrap">Sign in to manage your finances</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] h-[299.2px] items-start relative shrink-0 w-full" data-name="form">
            <div className="content-stretch flex flex-col gap-[8px] h-[77.6px] items-start relative shrink-0 w-full" data-name="div">
              <LabelText text="Email" />
              <button className="cursor-pointer h-[49.6px] relative rounded-[10px] shrink-0 w-full" data-name="input">
                <Wrapper>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-left whitespace-nowrap">you@company.com</p>
                </Wrapper>
                <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </button>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[77.6px] items-start relative shrink-0 w-full" data-name="div">
              <LabelText text="Password" />
              <div className="h-[49.6px] relative rounded-[10px] shrink-0 w-full" data-name="input">
                <Wrapper>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">••••••••</p>
                </Wrapper>
                <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
            </div>
            <div className="bg-[#2ca01c] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="button">
              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[223.86px] not-italic text-[16px] text-center text-white top-[9.8px] whitespace-nowrap">Sign In</p>
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="div">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[223.68px] not-italic text-[#2ca01c] text-[14px] text-center top-[0.2px] whitespace-nowrap">Create Account</p>
            </div>
          </div>
        </Container1>
      </Container>
      <Container additionalClassNames="bg-[#f0fff0]">
        <Container1 additionalClassNames="h-[607.987px] w-[512px]">
          <div className="h-[512px] relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="ImageWithFallback">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImageWithFallback} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] h-[63.987px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="h2">
              <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[24px] text-center">Manage Your Finances</p>
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="p">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[255.81px] not-italic text-[#4a5565] text-[16px] text-center top-[-2.2px] whitespace-nowrap">Track revenue, expenses, and payroll all in one place</p>
            </div>
          </div>
        </Container1>
      </Container>
    </div>
  );
}