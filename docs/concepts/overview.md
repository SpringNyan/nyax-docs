---
sidebar_position: 1
---

# 概述

Nyax 受启发于 Redux, Vuex, Rematch 和 redux-observable，并提炼融合各家之长以满足绝大多数业务需求。Nyax 通过 Model（模块） 定义状态和行为，通过 Container（容器） 获取状态和触发行为。

一个应用通常由若干个 Model 共同组合构成。Model 中定义了 initialState, selectors, reducers, effects 和 subscriptions。Model 可以是静态的或动态的。静态 Model 在注册时直接挂载在其 `namespace` 下，且全局只有一个实例；动态 Model 在注册时挂载在其 `namespace` 下的某个 `key` 下，且可以存在多个实例。

通过 Model（以及 `key`） 可以获取到其某个实例对应的 Container 实例。Container 实例中包含了 state, getters 和 actions。可以通过 Container 实例注册或卸载 Model 实例。
