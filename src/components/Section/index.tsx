import { PropsWithChildren } from 'react';

import { Tag, Wrapper } from './styles';

type SectionProps = {
  tag?: string;
} & PropsWithChildren;

function Section({ tag, children }: SectionProps) {
  return (
    <Wrapper>
      {tag && <Tag>{tag}</Tag>}
      {children}
    </Wrapper>
  );
}

export default Section;
