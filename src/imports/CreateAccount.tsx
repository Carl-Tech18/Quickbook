import clsx from "clsx";
import svgPaths from "./svg-nsyzw7rjk0";
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
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("flex-[1_0_0] h-[787.975px] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[16px] py-[12px] relative size-full", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="h-[49.6px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <Text text={text} />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
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

export default function CreateAccount() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Create Account">
      <Container additionalClassNames="bg-white">
        <Container1 additionalClassNames="h-[723.975px] w-[448px]">
          <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[40px] relative shrink-0 w-full" data-name="h1">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#2ca01c] text-[36px] top-[-2px] whitespace-nowrap">QuickBooks</p>
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="p">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.2px] whitespace-nowrap">Create your account</p>
            </div>
          </div>
          <div className="h-[619.975px] relative shrink-0 w-full" data-name="form">
            <div className="absolute h-[20px] left-0 top-0 w-[118.713px]" data-name="button">
              <div className="absolute left-0 size-[16px] top-[2px]" data-name="ArrowLeft">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="ArrowLeft">
                    <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[71px] not-italic text-[#4a5565] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Back to Sign In</p>
            </div>
            <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[77.6px] left-0 top-[36px] w-[448px]" data-name="div">
              <div className="col-2 content-stretch flex flex-col gap-[8px] h-[77.6px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
                <LabelText text="Last Name" />
                <InputText text="Doe" />
              </div>
              <div className="col-1 content-stretch flex flex-col gap-[8px] h-[77.6px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
                <LabelText text="First Name" />
                <InputText text="John" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[77.6px] items-start left-0 top-[129.6px] w-[448px]" data-name="div">
              <LabelText text="Company Name" />
              <InputText text="Acme Inc." />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[77.6px] items-start left-0 top-[223.2px] w-[448px]" data-name="div">
              <LabelText text="Email" />
              <InputText text="you@company.com" />
            </div>
            <div className="absolute h-[97.588px] left-0 top-[316.8px] w-[448px]" data-name="div">
              <div className="absolute h-[20px] left-0 top-0 w-[448px]" data-name="label">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">Password</p>
              </div>
              <div className="absolute h-[49.6px] left-0 rounded-[10px] top-[28px] w-[448px]" data-name="input">
                <Text text="••••••••" additionalClassNames="overflow-clip rounded-[inherit]" />
                <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
              <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[81.6px] w-[448px]" data-name="p">
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">At least 8 characters</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[77.6px] items-start left-0 top-[430.39px] w-[448px]" data-name="div">
              <LabelText text="Confirm Password" />
              <InputText text="••••••••" />
            </div>
            <div className="absolute bg-[#2ca01c] h-[48px] left-0 rounded-[10px] top-[523.99px] w-[448px]" data-name="button">
              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[223.51px] not-italic text-[16px] text-center text-white top-[9.8px] whitespace-nowrap">Create Account</p>
            </div>
            <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[603.99px] w-[448px]" data-name="p">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">By creating an account, you agree to our Terms of Service and Privacy Policy</p>
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
              <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[24px] text-center">Join Thousands of Businesses</p>
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="p">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[256.34px] not-italic text-[#4a5565] text-[16px] text-center top-[-2.2px] whitespace-nowrap">Start tracking your revenue, expenses, and payroll today</p>
            </div>
          </div>
        </Container1>
      </Container>
    </div>
  );
}