<template>
  <div class="row q-mt-xl">
    <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
    >
      <card-info
        icon="person"
        title="CONEXÕES"
        description="Visualização do perfil de todos os membros da comunidade. Filtragem por status.  Possibilidade de encontrar novas oportunidades de negócios."
      />
    </div>

    <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
    >
      <card-info
        icon="person"
        title="MENTORIAS"
        description="Dentro de cada corporação é possível criar grupos ou núcleo, agendar reuniões com ATA digital e check-in de cada integrante."
      />
    </div>
  </div>

  <div class="row" :class="$q.screen.lt.md ? '' : 'q-mt-xl'">
    <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
    >
      <card-info
        icon="person"
        title="NEGÓCIOS DISPONÍVEIS"
        description="á integrado à corporação, o FAQ é um espaço para se descrever como tudo funciona. É um campo livre onde pode-se colocar perguntas e respostas, horários e outras informações relevantes."
      />
    </div>

    <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
    >
      <card-info
        icon="person"
        title="COMISSÕES POR LEAD"
        description="Acompanhe em tempo real o andamento das tarefas e sub-tarefas delegadas aos grupos e aos indivíduos. Visualização utilizando o formato de listas ou a metodologia kanban. "
      />
    </div>
  </div>

  <div class="row" :class="$q.screen.lt.md ? '' : 'q-mt-xl'">
    <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
    >
      <card-info
        icon="person"
        title="ACESSO A MATERIAIS E CONTEÚDOS"
        description="Organize o uso das salas de reuniões. Todas as pessoas de sua corporação autorizadas a fazer agendamentos podem realizá-los através de seu login, e consultar em tempo real os horários disponíveis e ocupados."
      />
    </div>

    <div
      class="col-md-3 col-xs-12 q-pa-md"
      :class="$q.screen.lt.md ? '' : 'card-size'"
    >
      <card-info
        icon="person"
        title="AGENDA DE EVENTOS"
        description="Cada integrante da corporação pode se disponibilizar para ser um mentor para os demais membros.  Os usuários poderão agendar a mentoria diretamente pelo Multiplicame."
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CardInfo from "src/components/CardInfo.vue";

export default defineComponent({
  name: "Member",
  components: {
    CardInfo,
  },
  props: {},
});
</script>
