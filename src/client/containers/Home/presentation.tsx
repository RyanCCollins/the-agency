import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Hero, Headline, Image, Box, WithAnimation, Button } from 'ui';
import { StateProps } from './types';
import Wrapper from './styles';

interface State {
  section1: boolean;
  section2: boolean;
}

export default class Presentation extends React.Component<StateProps, State> {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      section1: false,
      section2: false,
    };
  }
  public componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  private section1Ref: Element;
  private section2Ref: Element;
  private handleScroll() {
    const windowHeight = window ? window.innerHeight : 1000;
    const section1Node = findDOMNode(this.section1Ref);
    const section2Node = findDOMNode(this.section2Ref);
    const section1 = section1Node.getBoundingClientRect().top < windowHeight / 2;
    const section2 = section2Node.getBoundingClientRect().top < windowHeight / 2;
    this.setState({
      section1,
      section2,
    });
  }
  public render() {
    return (
      <Wrapper>
        <Hero backgroundColor="#03A9F4">
          <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
            <Image
              alt="The Agency"
              src="https://github.com/RyanCCollins/cdn/blob/master/misc/rocket.png?raw=true"
              size={300}
            />
            <Headline color="white">
              The Agency
            </Headline>
          </Box>
        </Hero>
        <div ref={(ref) => { this.section1Ref = ref; }}>
          <Hero backgroundColor="#9c27b0">
            <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
              <Box style={{ maxWidth: 576 }} justifyContent="center">
                <WithAnimation type="fadeInUp" isVisible={this.state.section1}>
                  <Headline color="white">
                    We are a dedicated digital agency
                  </Headline>
                </WithAnimation>
              </Box>
            </Box>
          </Hero>
        </div>
        <div ref={(ref) => { this.section2Ref = ref; }}>
          <Hero backgroundColor="#ff9800">
            <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
              <Box style={{ maxWidth: 576 }} justifyContent="center">
                <WithAnimation type="fadeInUp" isVisible={this.state.section2}>
                  <Headline color="white">
                    We build scalable solutions for the web and mobile platforms
                  </Headline>
                  <Button
                    borderColor="#fff"
                    backgroundColor="transparent"
                    onClick={(e) => e}
                    label="See Case Studies"
                  />
                </WithAnimation>
              </Box>
            </Box>
          </Hero>
        </div>
      </Wrapper>
    );
  }
}
