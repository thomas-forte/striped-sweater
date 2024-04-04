import { CogIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useLeedle } from "../../context/LeedleContext";
import githubIcon from "../../images/github-mark-white.svg";
import { Badge, BadgeColor } from "../badge/Badge";
import { Button, ButtonHref } from "../button/Button";
import { Container } from "../container/Container";
import { SuperMarquee } from "../super-marquee/SuperMarquee";

export interface FooterProps {
  marquee?: string;
  marqueeSpeed?: string;
}

export const Footer = ({ marquee, marqueeSpeed }: FooterProps) => {
  const leedle = useLeedle();

  return (
    <footer
      className={classNames("bg-blue-900 py-1.5", {
        "border-t-2 border-gray-400": !marquee,
      })}
    >
      {marquee && <SuperMarquee text={marquee} speed={marqueeSpeed ?? "25s"} />}
      <Container>
        <div className="flex justify-between items-center">
          <ButtonHref href="https://github.com/thomas-forte/striped-sweater">
            Made with &lt;3 on
            <img className="ml-2 h-5 w-5" src={githubIcon} alt="github" />
          </ButtonHref>
          <div className="flex items-center">
            {leedle?.serverEnabled && (
              <Badge color={BadgeColor.yellow} text="Connected" />
            )}
            <Button>
              <CogIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
