import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Box, Image, WithAnimation } from 'ui';
import Overlay from './overlay';
import Relative from './relative';

export interface State {
  isVisible: boolean;
}

export interface Props extends React.HTMLProps<typeof CaseStudy> {
  image: string;
  title: string;
}

export default class CaseStudy extends React.Component<Props, State> {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isVisible: false,
    };
  }
  public componentDidMount() {
    if (typeof window !== 'undefined') {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  public componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  public divRef: Element;
  public handleScroll() {
    const windowHeight = window ? window.innerHeight : 1000;
    const node = findDOMNode(this.divRef);
    if (node) {
      const isVisible = node.getBoundingClientRect().top < windowHeight;
      this.setState({
        isVisible,
      });
    }
  }
  public render() {
    const { image, title } = this.props;
    return (
      <div ref={(ref) => { this.divRef = ref; }}>
        <WithAnimation type="fadeInUp" delay={100} {...this.state}>
          <Box pad="large">
            <Relative>
              <Overlay>
                <p>{title}</p>
              </Overlay>
              <Image imageSize="large" src={image} alt={title} />
            </Relative>
          </Box>
        </WithAnimation>
      </div>
    );
  }
}
