"""empty message

Revision ID: 6b4c2d1603a9
Revises: 51b20a22189c
Create Date: 2020-05-15 23:15:51.990616

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b4c2d1603a9'
down_revision = '51b20a22189c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Recipe', sa.Column('portions', sa.String(length=20), nullable=True))
    op.add_column('Recipe', sa.Column('time', sa.String(length=20), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('Recipe', 'time')
    op.drop_column('Recipe', 'portions')
    # ### end Alembic commands ###
