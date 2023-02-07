"""empty message

Revision ID: f8224526162b
Revises: aa99c9f4dda2
Create Date: 2023-02-07 09:54:25.285072

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8224526162b'
down_revision = 'aa99c9f4dda2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bands', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=500),
               existing_nullable=True)
        batch_op.alter_column('band_img',
               existing_type=sa.VARCHAR(length=255),
               type_=sa.String(length=500),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bands', schema=None) as batch_op:
        batch_op.alter_column('band_img',
               existing_type=sa.String(length=500),
               type_=sa.VARCHAR(length=255),
               existing_nullable=True)
        batch_op.alter_column('description',
               existing_type=sa.String(length=500),
               type_=sa.VARCHAR(length=80),
               existing_nullable=True)

    # ### end Alembic commands ###
