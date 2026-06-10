import { type IconType, SiClaude } from '@icons-pack/react-simple-icons';

export type Certification = {
  name: string;
  issuer: string;
  issuerIcon: IconType;
  image: string;
  pdf: string;
  verifyUrl?: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    name: 'Claude 101',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/claude-101.jpg',
    pdf: '/certificates/claude-101.pdf',
  },
  {
    name: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/claude-anthropic-api.jpg',
    pdf: '/certificates/claude-anthropic-api.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/j8wfx3cnuya7',
  },
  {
    name: 'Claude Code 101',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/claude-code-101.jpg',
    pdf: '/certificates/claude-code-101.pdf',
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/claude-code-in-action.jpg',
    pdf: '/certificates/claude-code-in-action.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/t673kze3v4mg',
  },
  {
    name: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/introduction-agent-skills.jpg',
    pdf: '/certificates/introduction-agent-skills.pdf',
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/introduction-model-context-protocol.jpg',
    pdf: '/certificates/introduction-model-context-protocol.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/48hp6b64jxc9',
  },
  {
    name: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    issuerIcon: SiClaude,
    image: '/certificates/introduction-claude-cowork.jpg',
    pdf: '/certificates/introduction-claude-cowork.pdf',
  },
];

export default CERTIFICATIONS;
