import { useState } from 'react';
import * as S from './Input.styles';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  invalid?: boolean;
  label?: string;
  icon?: JSX.Element;
}

const Input = ({ invalid, label, icon, ...rest }: IProps) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleInputEvent = (e: any) => {
    switch (e.type) {
      case 'focus':
      case 'blur':
        setFocused((p) => !p);
        return;
      case 'mouseenter':
      case 'mouseleave':
        setHovered((p) => !p);
        return;
    }
  };

  return (
    <S.Wrapper>
      {label ? (
        <S.Label htmlFor={rest.id} focused={focused} invalid={invalid}>
          {label}
        </S.Label>
      ) : null}
      <S.Container
        hovered={hovered}
        focused={focused}
        onMouseEnter={handleInputEvent}
        onMouseLeave={handleInputEvent}
        invalid={invalid}
      >
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input onFocus={handleInputEvent} onBlur={handleInputEvent} {...rest} />
      </S.Container>
    </S.Wrapper>
  );
};

export default Input;
