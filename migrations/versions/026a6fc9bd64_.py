"""empty message

Revision ID: 026a6fc9bd64
Revises: 65c22e4c64af
Create Date: 2023-02-04 10:56:20.649857

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '026a6fc9bd64'
down_revision = '65c22e4c64af'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bands', schema=None) as batch_op:
        batch_op.drop_constraint('bands_music_genre_id_fkey', type_='foreignkey')
        batch_op.drop_column('music_genre_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bands', schema=None) as batch_op:
        batch_op.add_column(sa.Column('music_genre_id', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
        batch_op.create_foreign_key('bands_music_genre_id_fkey', 'music_genre', ['music_genre_id'], ['name'])

    # ### end Alembic commands ###
