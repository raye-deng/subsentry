# Contributing to Subsentry

Thank you for your interest in contributing to Subsentry! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Testing](#testing)

---

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Welcome newcomers and help them learn

---

## How to Contribute

### Reporting Bugs

1. Check existing [issues](https://github.com/raye-deng/subsentry/issues)
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, browser, etc.)

### Suggesting Enhancements

1. Check for existing feature requests
2. Use a clear title: "Feature: [description]"
3. Explain the use case and benefit
4. Provide examples if possible

### Submitting Code

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Update documentation
6. Submit a pull request

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Git

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/subsentry.git
cd subsentry

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Submitting Changes

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Tests pass locally
- [ ] Documentation updated if needed
- [ ] Commit messages are clear
- [ ] PR description explains the changes

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Examples**:
```
feat(dashboard): add duplicate subscription detection
fix(plaid): resolve token expiration issue
docs(readme): update installation instructions
```

---

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Avoid `any` types when possible
- Use interfaces for object shapes
- Add JSDoc comments for complex functions

### Next.js/React

- Use functional components with hooks
- Keep components small and focused
- Use proper TypeScript typing for props
- Follow naming conventions (PascalCase for components)

### Styling

- Use Tailwind CSS utility classes
- Avoid custom CSS when possible
- Maintain consistency in color usage
- Ensure responsive design (mobile-first)

### File Organization

```
components/
  - feature/
    - FeatureComponent.tsx
    - FeatureComponent.test.tsx
    - index.ts
```

---

## Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:coverage
```

---

## Questions?

If you have questions about contributing:
- Open a [discussion](https://github.com/raye-deng/subsentry/discussions)
- Contact us at support@subsentry.vercel.app

---

Thank you for contributing! 🎉
