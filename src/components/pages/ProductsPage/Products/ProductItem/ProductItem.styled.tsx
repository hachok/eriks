import styled from 'src/styles';

interface ProductRowProps {
  isHighLighted?: boolean;
}

export const ProductItemWrapper = styled.div`
  flex: 0 0 24%;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductRow = styled.div<ProductRowProps>`
  padding: ${(props) => props.theme.space[1]};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
  ${(props) => props.isHighLighted && `background: ${props.theme.colors.lightGrey};`}
  font-weight: 600;
  &:last-child {
    border-bottom: none;
  }
`;

export const ProductItemTop = styled.div`
  flex: 1 0 auto;
`;

export const ProductItemBottom = styled.div`
  flex: 0 0 auto;
`;
